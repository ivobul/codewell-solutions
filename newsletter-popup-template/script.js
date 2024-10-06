const validation = new JustValidate(".app__form");

validation
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email cannot be empty",
    },
    {
      rule: "email",
      errorMessage: "Looks like this is not an email",
    },
  ])
  .onSuccess(() => {
    document.querySelector(".app__form").submit();
  });
