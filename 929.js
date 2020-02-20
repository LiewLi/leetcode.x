/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const _ = email => {
    const [local, domain] = email.split("@");
    const localName = local.replace(/\./g, "").split("+")[0];
    return `${localName}@${domain}`;
  };

  const set = new Set();
  for (const e of emails) {
    set.add(_(e));
  }

  return set.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
);
