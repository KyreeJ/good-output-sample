// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "mit") {
  return `![Github licence](https://choosealicense.com/licenses/mit/#)`;

}
return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "mit") 
    return `/n* [license](#license)/n`
  {
    return "";
    
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "none") {
  return `##license
  license under the ${license} license.`;
}
return "";
{
  
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  * [ description](#description)
  * [requirements](#requirments)
  * [usage](#usage)
  * [Contact-Me](#Contact-Me)
  * [Contributors](#Contributors)
  * [Testing](#testing)
  ${renderLicenseLink}(data.licesne)}
  ## Description
  ${data.description}
  ## Requirements
  ${data.requirments}
  ## usage
  ${data.usage}
  ## Contact-Me
  * Name - ${data.name}
  * Email - ${data.email}
  * Github - [${data.creator}]https://github.com/${data.creator}/)
  ## Contributors
  ${data.Contributors}
  ## testing
  \'\'\'
  ${data.test}
  \'\'\'
  ${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
