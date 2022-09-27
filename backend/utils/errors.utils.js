module.exports.sihnUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "wrong password" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrest ou deja pris";

  if (err.message.included("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire six carateres minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est deja pris";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "C'est email est deja enregistre";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };
  if (err.message.included("email")) errors.email = "Email inconnu";

  if (err.message.included("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Format incompatible";

  if (err.message.includes("max size"))
    errors.maxSize = "Le fichier depasse 500ko";

  return errors;
};
