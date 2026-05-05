export function logout() {
    const csrf = document.querySelector('meta[name="csrf-token"]').content;

    webix.ajax()
        .headers({
            "X-CSRF-Token": csrf,
            "Accept": "application/json"
        })
        .del("/logout")
        .then(() => {
            window.location.href = "/#!/login";
        })
        .catch(err => {
            console.error("Logout error:", err);
        });
}