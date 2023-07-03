import store from "@/store";

export default function hasBtnPermission(permission) {
    const mybtns = store.getters.buttons
    return mybtns.indexOf(permission) !== -1
}