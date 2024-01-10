const allAgreeCheckbox = document.getElementById('allAgreeCheckbox');
const individualCheckboxes = document.querySelectorAll(
  'input[type="checkbox"]:not(#allAgreeCheckbox)'
);

allAgreeCheckbox.addEventListener('change', function () {
  individualCheckboxes.forEach((checkbox) => {
    checkbox.checked = allAgreeCheckbox.checked;
  });
});

// 하위 체크박스 상태에 따라 전체 동의 체크박스 변경
individualCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    allAgreeCheckbox.checked = Array.from(individualCheckboxes).every(
      (checkbox) => checkbox.checked
    );
  });
});
