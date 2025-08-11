function Quick() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_partition(start, end) {
    var i = start - 1;
    var piv = div_sizes[end]; // use the last element as pivot
    div_update(divs[end], div_sizes[end], "yellow"); // highlight pivot

    for (var j = start; j < end; j++) {
        if (div_sizes[j] < piv) {
            i++;
            div_update(divs[j], div_sizes[j], "yellow"); // compare

            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            div_update(divs[i], div_sizes[i], "blue");
            div_update(divs[j], div_sizes[j], "blue");
        }
    }

    div_update(divs[i + 1], div_sizes[i + 1], "red");
    div_update(divs[end], div_sizes[end], "red");

    // Swap pivot to correct position
    var temp = div_sizes[i + 1];
    div_sizes[i + 1] = div_sizes[end];
    div_sizes[end] = temp;

    div_update(divs[i + 1], div_sizes[i + 1], "red");
    div_update(divs[end], div_sizes[end], "red");

    for (var t = start; t <= end; t++) {
        div_update(divs[t], div_sizes[t], "green");
    }

    return i + 1; // return the position of pivot
}

function quick_sort(start, end) {
    if (start < end) {
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);
        quick_sort(piv_pos + 1, end);
    }
}
