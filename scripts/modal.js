modal_elements={
    'wrapper' : document.getElementById('modal'),
    'modal-header' : document.getElementById('modal-header'),
    'modal-header-text' : document.getElementById('modal-header-text'),
    'modal-header-subtext' : document.getElementById('modal-header-subtext'),
    'modal-button' : document.getElementById('modal-button'),
    'modal-text' : document.getElementById('modal-text'),
    'modal-skill-container' : document.getElementById('modal-skill-container'),
    'modal-image' : document.getElementById('modal-image')
}
modal_elements['wrapper'].style.display = 'none';

//Function
function update_modal(e){
    let project_wrapper = e.target.parentNode.parentNode; //Because the e.target gives the paragraph, we need to go two above to the project wrapper
    let modal_text = project_wrapper.querySelector('.modal-hidden-text').textContent;
    let modal_title = project_wrapper.querySelectorAll('.projectTitle')[0];
    let modal_date = project_wrapper.querySelectorAll('.projectTitle')[1];
    let modal_skills = project_wrapper.querySelectorAll('.modal-hidden-skill');
    modal_elements['modal-text'].textContent = modal_text;
    modal_elements['modal-header-text'].textContent = modal_title.textContent;
    modal_elements['modal-header-subtext'].textContent = "Date: " + modal_date.textContent; 
    modal_skills.forEach((skill_element) =>{
        let p = document.createElement('p');
        p.classList.add('modal-skill-text');
        p.textContent = skill_element.textContent;
        modal_elements['modal-skill-container'].append(p);
    })


}
function open_modal(e){
    modal_elements['wrapper'].style.display = 'grid';
}
function close_modal(e){
    modal_elements['modal-skill-container'].querySelectorAll('.modal-skill-text').forEach((element) =>{
        element.remove();
    })
    modal_elements['wrapper'].style.display='none'
}
//Event Listeners
modal_elements['modal-button'].addEventListener('click', close_modal);
document.querySelectorAll('.modal-expand-button').forEach(element => {
    element.addEventListener('click', (e) => {
        open_modal();
        
    })
    element.addEventListener('click', update_modal);
});
