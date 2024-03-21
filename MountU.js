document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCount = document.getElementById('checked-count');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let checkedItems = 0;
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    checkedItems++;
                }
            });
            checkedCount.textContent = checkedItems;
        });
    });
});