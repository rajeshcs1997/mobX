import { action, computed, makeAutoObservable, makeObservable, autorun, runInAction, observable } from "mobx"

class UserStore {
	userInfo = {
		id: '112',
		name: 'rajesh prajapati',
		subject: ['maths', 'hindi', 'english']
	}
	constructor() {
    makeObservable(this,{
    	userInfo: observable,
    	totalSubject: computed,
    	updateUser: action,
    	addSubject: action 
    });
    autorun(this.logUserDetails);
    runInAction(this.prefetchData);
  }

  get totalSubject(){
  	console.log("getter")
  	return this.userInfo.subject.length
  }

  logUserDetails = () =>{
  	console.log("total subject"+ this.totalSubject)
  }
  
  prefetchData = () =>{
  	console.log("run in action")
  }
  updateUser = (name) =>{
  	return this.userInfo.name = name;
  }
  addSubject = (data) =>{
  	return this.userInfo.subject = [...this.userInfo.subject, data];
  	//return this.userInfo.subject.push(data);
  }
}

export default UserStore;