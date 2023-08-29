const submit = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#fullName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const address = document.querySelector('#address').value.trim();
    const experience = document.querySelector('#experience').value.trim();
    const education = document.querySelector('#education').value.trim();
    const skills = document.querySelector('#skills').value.trim();
    const hobbies = document.querySelector('#hobbies').value.trim();

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(address)
    console.log(experience)
    console.log(education)
    console.log(skills)
    console.log(hobbies)


}
document
.querySelector('#resume')
.addEventListener('submit', submit);