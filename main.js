let wilaya=document.querySelectorAll('.land');
let i = document.querySelector('#information');
let a = document.querySelector('#area');
let p = document.querySelector('#population');

let wData={};
fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    wData=data;
  })
  .catch(error => console.error('Error loading JSON:', error));

  
wilaya.forEach(w => {
  w.addEventListener('click', (event) => {
    const id = w.getAttribute('id'); 
    const wilayaId = id.split('-')[1]; 
    const wilayaInfo = wData.find(wilaya => wilaya.id === parseInt(wilayaId));

    if (wilayaInfo) {
      i.innerText = `${wilayaInfo.info}`
      a.innerHTML = `Area : ${wilayaInfo.area}m<sup>2</sup>`
      p.innerText = `Population : ${wilayaInfo.population}`
    }
  });
});
  