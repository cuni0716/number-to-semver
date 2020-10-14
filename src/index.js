function numberToSemver(num) {
  if (num === 0) {
    return "0.0.0";
  }

  if (!num || isNaN(num)) {
    throw new Error(`${num} is not a valid parameter input`);
  }

  let major, minor, rest;

  switch (num.toString().length) {
      case 1:
      case 2:
        return `0.0.${num}`;
      case 3:
          [minor, ...rest] = num.toString().split("");
          patch = rest[rest.length - 1] === "0" ? +rest.join("") : rest.join("").toString();
          return `0.${minor}.${patch}`;
      case 4:
          [major, minor, ...rest] = num.toString().split("");
          patch = rest[rest.length - 1] === "0" ? +rest.join("") : rest.join("").toString();
          return `${major}.${minor}.${patch}`;
      default:
          patch = num.toString().slice(-2);
          minor = num.toString().slice(-3, -2);
          major = num.toString().slice(0, -3);
          return `${major}.${minor}.${patch[patch.length - 1] === "0" ? +patch : patch}`;
  }
}

module.exports = numberToSemver;
