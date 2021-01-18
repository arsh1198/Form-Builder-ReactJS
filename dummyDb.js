const data = {
  users: [
    {
      id: 1,
      forms: [
        {
          "sample-form": {
            id: "form#1",
            blocks: [
              {
                type: "Heading",
                value: "This is a sample Form!",
              },
              {
                type: "Input",
                label: "Name",
                placeholder: "Enter your Name",
                required: true,
              },
              {
                type: "Email",
                label: "Email",
                placeholder: "Enter your Email",
                required: true,
              },
              {
                type: "RadioGroup",
                label: "Gender",
                selected: 0,
                values: ["Male", "Female", "Prefer Not to say"],
              },
              {
                type: "CheckboxGroup",
                label: "skills",

                values: ["NextJS", "React", "MongoDB", "Express"],
              },
              {
                type: "SelectList",
                label: "Prefferd Job Profile",
                values: [
                  "Frontend Devf",
                  "Backend Devf",
                  "UI/UX designer",
                  "Project Analyst",
                  "Testing Prof.",
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export default data;
