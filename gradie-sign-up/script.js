const validator = new JustValidate(".form", {
  tooltip: {
    position: "top",
  },
})

validator
  .addField("#email", [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ])
  .addField("#password", [
    {
      rule: "required",
    },
    {
      rule: "strongPassword",
    },
  ])
  .addField("#checkbox", [
    {
      rule: "required",
    },
  ],
  {
    tooltip: {
	  position: "right",
    },
  })
  .onSuccess(() => {
    document.querySelector(".form").submit();
  })
