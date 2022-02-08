// document.getElementById("submit_btn").addEventListener("click", (e) => {
//   e.preventDefault();

//   const student_name = document.getElementById("student_name");
//   //   console.log(student_name);
//   //   const nameValue = student_name.value;
//   //   console.log("hello", nameValue);
//   const birth_year = document.getElementById("birth_year").value;
//   const current_year = document.getElementById("current_year").value;
//   const district = document.getElementById("district").value;
//   const post_no = document.getElementById("post_no").value;
//   const priority = document.getElementById("priority").value;

//   const outputText = `name:${district
//     .slice(0, 2)
//     .toUpperCase()}${current_year.slice(2, 4)}${post_no.slice(
//     0,
//     2
//   )}${birth_year}0000${priority}`;
//   console.log(outputText);

//   const inner_student_list = document.getElementById("inner_student_list");
//   const student_document = document.createElement("p");
//   student_document.innerText = outputText;
//   inner_student_list.appendChild(student_document);

//   const giftR = document.createElement("span");
//   giftR.innerText = "R";

//   const giftW = document.createElement("span");
//   giftW.innerText = "W";
//   const even = priority;
//   if (even % 2 === 0) {
//     console.log("even");
//     inner_student_list.appendChild(giftR);
//   } else {
//     console.log("odd");
//     inner_student_list.appendChild(giftW);
//   }
//   const get_priority = document.createElement("span");
//   get_priority.innerText = priority;
//   inner_student_list.appendChild(get_priority);
// });

const cardDistribution = () => {
  const student_name = document.getElementById("student_name");
  const birth_year = document.getElementById("birth_year");
  const birth_year_value = birth_year.value;

  const current_year = document.getElementById("current_year");
  const current_year_value = current_year.value;

  const district = document.getElementById("district");
  const district_value = district.value;

  const post_no = document.getElementById("post_no");
  const post_no_value = post_no.value;

  const priority = document.getElementById("priority");
  const priority_value = priority.value;

  const outputText = [
    `cardNumber:${district_value
      .slice(0, 2)
      .toUpperCase()}${current_year_value.slice(2, 4)}${post_no_value.slice(
      0,
      2
    )}${birth_year_value}00000${priority_value}  gift:  ${
      Number(priority_value) % 2 === 0 ? "R" : "W"
    } priority: ${priority_value} `,
  ];

  const inner_student_list = document.getElementById("inner_student_list");
  const student_document = document.createElement("p");
  student_document.innerText = outputText;
  student_document.classList.add("inner_student_list_p");
  inner_student_list.appendChild(student_document);
  // console.log(outputText.priority.sort((a, b) => a - b));
  const list_man = [];
  list_man.push(priority_value);
  const save_list = [...list_man];
  console.log(save_list);

  // if (
  //   student_name.value === "" ||
  //   birth_year.value === "" ||
  //   current_year.value === "" ||
  //   district.value === "" ||
  //   post_no.value === "" ||
  //   priority.value === ""
  // ) {
  //   alert("plz giv input value");
  // }
  console.log(outputText);
  student_name.value = "";
  birth_year.value = "";
  current_year.value = "";
  district.value = "";
  post_no.value = "";
  priority.value = "";
};
