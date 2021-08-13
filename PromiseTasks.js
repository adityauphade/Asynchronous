//promise
function validate(...params){
    this.name = params[0];
    this.mail = params[1];
    this.mobile = params[2];
    return new Promise((resolve, reject) => {
            const regex_name = /^([A-Z][a-zA-Z]{2,})$/; 
            const regex_mail = /^([a-z]+[.][a-z]+[@][a-z]+[.][a-z]+([.a-z]+)$)$/;
            const regex_mobile = /^([0-9]{2}[ ][1-9][0-9]{9})$/;
            if (regex_name.test(this.name)){
                if (regex_mail.test(this.mail)) {
                    if (regex_mobile.test(this.mobile)) {
                        resolve(`\nName, Mail & Mobile Number is in proper format`);
                    }
                }
            }
            else{
                reject("\nSyntax for name is wrong");
            }
            
    })
}

//last name
validate(`Aditya`, `aditya.uphade@gmail.com`, `91 9999999999`).then(val => console.log(val)).catch(val => console.log(val));
