const newJob = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#jobTitle').value.trim();
    let company_name = document.querySelector('#companyName').value.trim();
    const job_description = document.querySelector('#jobDescription').value.trim();
    
    if(company_name == '')
        company_name = null;
    console.log(title);
    console.log(company_name);
    console.log(job_description);

    const response = await fetch(`/api/jobs`, {
        method: 'POST',
        body: JSON.stringify({ title, company_name, job_description}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok){
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }

}
document
.querySelector('#new_job')
.addEventListener('submit', newJob);