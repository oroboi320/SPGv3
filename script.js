  var allCombinations = [];

     function applyRules(digit) {
            switch (digit) {
                case '0':
                    return ['1', '4', '0', '9'];
                case '1':
                    return ['0', '4', '1', '2',];
                case '2':
                    return ['5', '7', '1', '3', '2'];
                case '3':
                    return ['5', '8', '3', '2', '4'];
                case '4':
                    return ['7', '9', '4', '5', '3', '0', '1'];
                case '5':
                    return ['2', '3', '5', '4', '6'];
                case '6':
                    return ['9', '6', '5', '7'];
                case '7':
                    return ['2', '4', '7', '6', '8'];
                case '8':
                    return ['3', '8', '7', '9'];
                case '9':
                    return ['6', '9', '0', '8', '4'];
                default:
                    return [digit];
            }
        }

        function generateCombinationsHelper(inputNumber, index, currentCombination, result) {
            if (index === inputNumber.length) {
                result.push(currentCombination);
                return;
            }

            var possibleValues = applyRules(inputNumber[index]);
            for (var i = 0; i < possibleValues.length; i++) {
                generateCombinationsHelper(inputNumber, index + 1, currentCombination + possibleValues[i], result);
            }
        }

        function generateCombinations() {
            var inputNumber = document.getElementById("inputNumber").value;

            if (inputNumber.length === 3 && !isNaN(inputNumber)) {
                allCombinations = [];
                generateCombinationsHelper(inputNumber, 0, '', allCombinations);

                displayCombinations(allCombinations);
            } else {
                alert("Please enter a valid 3-digit number.");
            }
        }
function filterCombinations2() {
    var filterValue = document.getElementById("filterBox2").value.toUpperCase();

    if (/^[EO]{3}$/.test(filterValue)) {
        if (filterValue.length === 3) {
            var filteredCombinations2 = allCombinations.filter(function(combination) {
                var oddCount = 0;
                var evenCount = 0;

                for (var i = 0; i < 3; i++) {
                    var digit = combination[i];

                    if (['0', '2', '4', '6', '8'].includes(digit)) {
                        evenCount++;
                    } else if (['1', '3', '5', '7', '9'].includes(digit)) {
                        oddCount++;
                    }
                }

                return oddCount === filterValue.split('O').length - 1 &&
                       evenCount === filterValue.split('E').length - 1;
            });

            displayCombinations(filteredCombinations2);
        } else {
            // If the filter box is empty or doesn't have exactly 3 characters, display all combinations
            displayCombinations(allCombinations);
        }
    } else {
        alert("Please enter a valid 3-digit format using 'E' and/or 'O' in the filter box.");
    }
}
        function filterCombinations() {
            var filterValue = document.getElementById("filterBox").value;

            if (/^[0-9]*$/.test(filterValue)) {
                if (filterValue.length > 0) {
                    var filteredCombinations = allCombinations.filter(function(combination) {
                        for (var i = 0; i < filterValue.length; i++) {
                            if (!combination.includes(filterValue[i])) {
                                return false;
                            }
                        }
                        return true;
                    });
                    displayCombinations(filteredCombinations);
                } else {
                    // If the filter box is empty, display all combinations
                    displayCombinations(allCombinations);
                }
            } else {
                alert("Please enter only digits in the filter box.");
            }
        }

        function displayCombinations(combinations) {
            var generatedCombinationsElement = document.getElementById("generatedCombinations");
            generatedCombinationsElement.innerHTML = ""; // Clear previous results

            for (var i = 0; i < combinations.length; i++) {
                var combinationElement = document.createElement("div");
                combinationElement.classList.add("combination");
                combinationElement.textContent = combinations[i];
                generatedCombinationsElement.appendChild(combinationElement);
            }
        }
function filterCombinations3() {
    var filterValue = document.getElementById("filterBox3").value.toUpperCase();

    if (/^[HL]{3}$/.test(filterValue)) {
        if (filterValue.length === 3) {
            var filteredCombinations3 = allCombinations.filter(function(combination) {
                var highCount = 0;
                var lowCount = 0;

                for (var i = 0; i < 3; i++) {
                    var digit = combination[i];

                    if (['5', '6', '7', '8', '9'].includes(digit)) {
                        highCount++;
                    } else if (['0', '1', '2', '3', '4'].includes(digit)) {
                        lowCount++;
                    }
                }

                return highCount === filterValue.split('H').length - 1 &&
                       lowCount === filterValue.split('L').length - 1;
            });

            displayCombinations(filteredCombinations3);
        } else {
            // If the filter box is empty or doesn't have exactly 3 characters, display all combinations
            displayCombinations(allCombinations);
        }
    } else {
        alert("Please enter a valid 3-digit format using 'H' and/or 'L' in the filter box.");
    }
}
function chooseLuckyCombination() {
        // Check if there are generated combinations
        if (allCombinations.length > 0) {
            // Randomly choose a combination
            var randomIndex = Math.floor(Math.random() * allCombinations.length);
            var luckyCombination = allCombinations[randomIndex];

            // Display the lucky combination
            alert("Your Lucky Combination is: " + luckyCombination + ";" +  " Always play rambolito ");
        } else {
            alert("Generate probables first before choosing a lucky combination.");
        }
    }
