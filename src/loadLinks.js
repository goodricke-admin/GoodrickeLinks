export const loadLinks = () =>
    fetch("/api/links")
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .then((res) => res.json());