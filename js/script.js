const loadPhone = async (searchText=13) => { 
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    //see the search output length
    const dataLength = phones.length;
    console.log(dataLength);
    //console.log(phones);
    displayPhones(phones);
}
const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container before search
    phoneContainer.innerText = "";
    //console.log(phoneContainer);
    phones.forEach(phone => {
        console.log(phone); 
        const phoneCard = document.createElement('div');
        phoneCard.classList = "card bg-base-100 shadow-xl my-4 p-2";
        phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Phone" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            <!-- Open the modal using ID.showModal() method -->
            <button class="btn  btn-primary" onclick="phone_details_${phone.phone_name}.showModal()">Buy!</button>
            <dialog id="phone_details_${phone.phone_name}" class="modal modal-bottom sm:modal-middle">
            <form method="dialog" class="modal-box">
                <h3 class="font-bold text-lg">${phone.phone_name}</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                
                <div class="modal-action">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
                </div>

            </form>
            </dialog>
            </div>
        </div>`        
        phoneContainer.appendChild(phoneCard);
    });    
}

const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}
//loadPhone();
















