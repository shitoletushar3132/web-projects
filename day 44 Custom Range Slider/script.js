const range = document.getElementById("range");
const label = document.getElementById("label");

// console.log(range.value);
range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");

  const label_width = getComputedStyle(
    e.target.nextElementSibling
  ).getPropertyValue("width");

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  console.log(num_width, num_label_width);
  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

  console.log(left);
  label.style.left = `${left}px`;

  label.innerText = value;
});

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num - in_min) * (out_max - out_min)/(in_max - in_min) + out_min;
}

