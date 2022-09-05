import axios from 'axios'

function get( url,params){
	// params是接收到的参数
	params = params || {}
	console.log(params)
	return new Promise((resolve,reject)=>{
		axios.get(url,{params})
		  // 成功
			.then(res =>{
				if(res.status === 200){
					resolve(res.data)
				}
			})
			// 拒绝
			.catch(err =>{
				reject(err)
			})
	})
}

export default get
