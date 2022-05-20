function addTodoPicture() {
    navigator.camera.getPicture(addTodo, function () {
        alert("Failed to get camera.");
    }, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 100,
        targetHeight: 100
    });
}

function addTodo(imageData) {
    const title = $("#todo-title").val();
    const body = $("#todo-body").val();
    const img_tag = `<img src="data:image/jpeg;base64,${imageData}">`;

    $.mobile.changePage($("#list-page"));
    $("#todo-list").append(`<li>${img_tag}<h3>${title}</h3><p>${body}</p></li>`)
    $("#todo-list").listview('refresh');
};