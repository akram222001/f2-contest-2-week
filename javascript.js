    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const countDisplay = document.getElementById('count');
    const errorMsg = document.getElementById('errorMsg');

    let count = 0;

    function updateCountDisplay() {
        countDisplay.textContent = count;
        if (count === 0) {
            decrementBtn.disabled = true;
            errorMsg.style.display = 'none';
        } else {
            decrementBtn.disabled = false;
        }
    }

    function showError() {
        errorMsg.style.display = 'block';
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 2000); // Hide error message after 2 seconds
    }

    incrementBtn.addEventListener('click', function () {
        count++;
        updateCountDisplay();
    });

    decrementBtn.addEventListener('click', function () {
        if (count > 0) {
            count--;
            updateCountDisplay();
        } else {
            showError();
        }
    });

    clearBtn.addEventListener('click', function () {
        count = 0;
        updateCountDisplay();
    });






// const incBtn = document.getElementById('increment');
// const decBtn = document.getElementById('decrement');
// const clearBtn = document.getElementById('clear');
// const countDisplay = document.getElementById('count');
// const error = document.getElementById('error');

// let count = 0;

// function updateCount (){
//     countDisplay.textContent = count;
//     if(count === 0){
//         decBtn.disabled = true;
//         error.style.display = 'none';
//     }else{
//         decBtn.disabled = false;
//     };
// };

// function error(){
//     error.style.display = 'block';
//     setTimeout(()=>{
//         error.style.display = 'none';
//     },2000);
// };

// incBtn.addEventListener('click', function(){
//     count++;
//     updateCount();
// });

// decBtn.addEventListener('click', function(){
//     if(count > 0){
//         count--;
//         updateCount();
//     }else{
//         error();
//     };
// });

// clearBtn.addEventListener('click', function(){
//     count==0;
//     updateCount();
// });