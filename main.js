async function renDerUser() {
    try {
        const vada = await fetch("https://randomuser.me/api/");
        const vadaKeldi = await vada.json();
        const obyektlar = vadaKeldi.results[0];

        document.getElementById("user-name").innerHTML = 
            `
            <div class="flex g-[12px] justify-center text-[28px] text-[900]">
            ${obyektlar.name.title}
             ${obyektlar.name.first}
              ${obyektlar.name.last}
            </div>
              Telefon:+${obyektlar.phone} <br>
              Yosh: ${obyektlar.dob.age} <br>
              Manzil: ${obyektlar.location.country} <br>
              Email: ${obyektlar.email} <br>
            `;

        document.getElementById("user-image").src = obyektlar.picture.large;

    } catch (error) {
        console.log("Xatolik", error);
    }
}

document.getElementById("changeUser").addEventListener("click", renDerUser);

renDerUser();
