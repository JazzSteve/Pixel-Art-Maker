function makeGrid() {
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    const $table = $('#pixelCanvas');

    for (let i = 0; i < height; i++) {
        const $row = $('<tr />');
        for (let j = 0; j < width; j++) {
            const $cell = '<td />';
            $row.append($cell);
        }
        $table.append($row);
    }
}

function clearCanvas() {
    const $table = $('#pixelCanvas');
    $table.html('');
}

function colorCell($cell, color) {
    let colorPicker = $('#colorPicker').val();
    let chosenColor = color || colorPicker;
    $cell.css('background', chosenColor);
}
(function runApp() {
    $('#sizePicker').submit(function(event) {
        event.preventDefault();
        clearCanvas();
        makeGrid();
    });

    $('#pixelCanvas').on('click', 'td', function() {
        let $cell = $(this);
        colorCell($cell);
    });

})();