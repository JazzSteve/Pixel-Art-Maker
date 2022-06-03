function makeGrid() { //function to create grid and select size input
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    const $table = $('#pixelCanvas');

    for (let i = 0; i < height; i++) { //creates table
        const $row = $('<tr />');
        for (let j = 0; j < width; j++) {
            const $cell = '<td />';
            $row.append($cell);
        }
        $table.append($row);
    }
}

function clearCanvas() { //clear canvas function
    const $table = $('#pixelCanvas');
    $table.html('');
}

function colorCell($cell, color) {
    let colorPicker = $('#colorPicker').val();
    let chosenColor = color || colorPicker;
    $cell.css('background', chosenColor);
}
(function runApp() {
    $('#sizePicker').submit(function(event) { //when size is submitted call makegrid()
        event.preventDefault();
        clearCanvas();
        makeGrid();
    });

    $('#pixelCanvas').on('click', 'td', function() { //when cell is clicked the color will change
        let $cell = $(this);
        colorCell($cell);
    });

})();