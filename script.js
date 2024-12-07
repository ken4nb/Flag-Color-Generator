document.addEventListener('DOMContentLoaded', (event) => {
    const buttonChange = document.querySelector("#button-of-color")
    const firstRow = document.querySelector(".flag-row-1");
    const secondRow = document.querySelector(".flag-row-2");
    const thirdRow = document.querySelector(".flag-row-3");
    const firstColumn = document.querySelector(".flag-column-1");;
    const secondColumn = document.querySelector(".flag-column-2");
    const thirdColumn = document.querySelector(".flag-column-3");
    const pickFrameOne = document.querySelector(".frame-picker-1");
    const pickFrameTwo = document.querySelector(".frame-picker-2");
    const pickFrameThree = document.querySelector(".frame-picker-3");
    const flagBox = document.querySelector("#flag-box");
    const flagBoxTwo = document.querySelector("#flag-box-2");
    const flagBoxThree = document.querySelector("#flag-box-3");
    const turnFlagBox = [false, false, false]
    const circleFlag = document.querySelector("#circle-flag")
    const japanicFlag = document.querySelector("#japanic-flag")

    function turnFlagBoxes(n) {
        switch (n) {
            case 1:
                turnFlagBox[0] = true;
                turnFlagBox[1] = false;
                turnFlagBox[2] = false;
                break;
            case 2:
                turnFlagBox[0] = false;
                turnFlagBox[1] = true;
                turnFlagBox[2] = false;
                break;
            case 3:
                turnFlagBox[0] = false;
                turnFlagBox[1] = false;
                turnFlagBox[2] = true;
                break;
        }
    }

    function commonColors(index) {
        switch (index) {
            case 1: 
                japanicFlag.style.backgroundColor = "azure";
                circleFlag.style.backgroundColor = "red";
                break;
            case 2:
                firstRow.style.backgroundColor = "rgb(0, 0, 0)";
                secondRow.style.backgroundColor = "rgb(255, 0, 0)";
                thirdRow.style.backgroundColor = "rgb(255, 255, 0)";
                break;
            case 3:
                firstColumn.style.backgroundColor = "rgb(2, 2, 124)";
                secondColumn.style.backgroundColor = "rgb(240, 255, 255)";
                thirdColumn.style.backgroundColor = "rgb(255, 0, 0)";
                break;
        }
    }

    function showFlag(n) {
        switch(n) {
            case 1:
                flagBoxThree.style.display = "flex";
                flagBoxTwo.style.display = "none";
                flagBox.style.display = "none";
                break;
            case 2: 
                flagBoxThree.style.display = "none";
                flagBoxTwo.style.display = "flex";
                flagBox.style.display = "none";
                break;
            case 3:
                flagBoxThree.style.display = "none";
                flagBoxTwo.style.display = "none";
                flagBox.style.display = "flex";
                break;
        }
    }

    function showFrameOne() {
        showFlag(1);
        turnFlagBoxes(1);
        commonColors(1);
    }

    function showFrameThree() {
        showFlag(2);
        turnFlagBoxes(3);
        commonColors(3);
    }

    function showFrameTwo() {
        showFlag(3);
        turnFlagBoxes(2);
        commonColors(2);
    }

    function changeColor() {

        if (turnFlagBox[0]) {
            japanicFlag.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
            circleFlag.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
        }

        if (turnFlagBox[1]) {
            firstRow.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
            secondRow.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
            thirdRow.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
        } 

        if (turnFlagBox[2]) {
            firstColumn.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
            secondColumn.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
            thirdColumn.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
        }
    }

    pickFrameOne.onclick = showFrameOne;
    pickFrameTwo.onclick = showFrameTwo;
    pickFrameThree.onclick = showFrameThree;
    buttonChange.onclick = changeColor;
}); 
