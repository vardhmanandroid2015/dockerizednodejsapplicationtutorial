# dockerizednodejsapplicationtutorial
Tutorial on How to dockerized NodeJS application

Without Docker container
	Step1 : Clone the repository & get inside the repositroy folder
	Step2 : run following command to start server on 3000 with following message - Example app listening at http://:::3000
				node postgresindex.js
	Step3 : Send request as per youtube video 
	
With Docker
	Step1 : docker-compose -f nodejspostgres-docker-compose.yaml up -d
	Step2 : this will expose 40196 as port on localhost to sedn request that would be listen on 3000 inside container name noderestapi
