import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";
import Link from "./Link";

const sanitiseUrl = urlIn => {
    if (urlIn === "" || urlIn === null) {
        return urlIn;
    }

    let url = urlIn;
    if (!urlIn.startsWith("https://") && !urlIn.startsWith("http://" && !urlIn.startsWith("mailto:"))) {
        url = "https://" + url;
    }
    return url;
};

export default function LinkEditor({ linkData, password }) {

    const [data, setData] = useState(linkData);
    const [dirty, setDirty] = useState(false);

    const [deleteLoading, setDeleteLoading] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false);

    useEffect(() => {
        
        const listener = e => {
            if (dirty) {
                e.preventDefault();
                e.returnValue = "You have unsaved changes";
                return "You have unsaved changes";
            };
        };

        window.addEventListener("beforeunload", listener);

        return () => window.removeEventListener("beforeunload", listener);
    }, [dirty]);

    // has been deleted
    if (data === null) {
        return <></>;
    }

    return (
        <div style={editorStyle}>

            <form style={editFormStyle}>
                <label htmlFor={"title-input-" + data._id}>Title</label>
                <input type="text" value={data.title} required onChange={e => {
                    setData({ ...data, title: e.target.value });
                    setDirty(true);
                }} id={"title-input-" + data._id} />

                <label htmlFor={"description-input" + data._id}>Description <span style={hintStyle}>(optional)</span></label>
                <input type="text" value={data.description} onChange={e => {
                    setData({ ...data, description: e.target.value });
                    setDirty(true);
                }} id={"description-input-" + data._id} />

                <label htmlFor={"url-input" + data._id}>Link <span style={hintStyle}>(insert emails with 'mailto:example@example.com')</span></label>
                <input type="text" value={data.url} required onChange={e => {
                    setData({ ...data, url: e.target.value });
                    setDirty(true);
                }} id={"url-input-" + data._id} />

                <label htmlFor={"image-url-input" + data._id}>Image link <span style={hintStyle}>(optional)</span></label>
                <input type="text" value={data.imageUrl} onChange={e => {
                    setData({ ...data, imageUrl: e.target.value });
                    setDirty(true);
                }} id={"image-url-input-" + data._id} />
            </form>

            Preview
            <Link {...data} url={sanitiseUrl(data.url)} />

            <div style={buttonsStyle}>


                <LoadingButton loading={deleteLoading} variant="outlined" color="error" onClick={async () => {
                    setDeleteLoading(true);
                    const res = await fetch("/api/links/delete", {
                        headers: { "Content-Type": "application/json" },
                        method: "POST",
                        body: JSON.stringify({
                            id: data._id,
                            password
                        })
                    });
                    if (res.ok) {
                        setData(null);
                    } else {
                        alert("couldn't delete");
                    }
                    setDeleteLoading(false);
                }}>Delete</LoadingButton>

                <LoadingButton loading={saveLoading} disabled={!dirty} variant="contained" onClick={async () => {
                    setSaveLoading(true);

                    await fetch("/api/links/edit", {
                        headers: { "Content-Type": "application/json" },
                        method: "POST",
                        body: JSON.stringify({
                            id: data._id,
                            title: data.title,
                            description: data.description,
                            url: sanitiseUrl(data.url),
                            imageUrl: data.imageUrl,
                            password
                        })
                    });
                    setDirty(false);
                    setSaveLoading(false);

                }}>Save changes</LoadingButton>
            </div>

        </div>
    );
}

const editorStyle = {
    border: "2px solid #444",
    padding: "1em",
    marginTop: "1em",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    maxWidth: "500px",
    width: "90%"
};

const editFormStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.5em",
    margin: "0 0 1em 0",
};

const buttonsStyle = {
    display: "flex",
    flexFlow: "row",
    gap: "1em",
    marginTop: "1em"
};

const hintStyle = {
    opacity: 0.7,
    fontSize: "0.8em"
};