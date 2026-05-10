const ACTION_STYLES = {
    edit: "#1976d2",
    delete: "#d32f2f",
    view: "#616161",
    add: "#2e7d32"
};

function buildActionButton(action) {
    return `
    <span
      class="${action}-btn"
      style="
        cursor:pointer;
        color:${ACTION_STYLES[action]};
        font-weight:500;
        margin-right:12px;
      "
    >
      ${capitalize(action)}
    </span>
  `;
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function TableActions(actions = []) {
    return {
        id: "actions",
        header: "Actions",
        width: actions.length * 70,

        template: actions
            .map(buildActionButton)
            .join("")
    };
}