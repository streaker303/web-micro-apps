function checkPermission(el, binding) {
    let permission = binding.value
    console.log(permission, '权限')
    if (!permission) {
        el.parentNode && el.parentNode.removeChild(el)
    }
}

export default {
    inserted(el, binding) {
        checkPermission(el, binding)
    },
    update(el, binding) {
        checkPermission(el, binding)
    }
}
