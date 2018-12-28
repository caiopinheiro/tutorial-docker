#Tutorial de docker

Lista de comandos utilizados:

|Descrição              | Comando  |
|---------------------------------|------------------------------------------------|
| Construir uma imagem            | docker build -t `image_name` `path/Dockerfile` |
| Gerar um container (attach)     | docker run -p 3000:3000 `image_name`           |
| Gerar um container (detach)     | docker run -d -p 3000:3000 `image_name`        |
| Adentrar em um container ativo  | docker exec -it `image_name` bash              |
| Pausar um container             | docker stop `image_name`                       |
| Listar todos o container ativos | docker container ls                            |
| Deletar uma imagem              | docker rmi `image_id`                          |

#Extras

* Habilitar o postgres:

`docker run --add-host=docker:$(ip route get 1 | grep -Eo 'src \S+' | awk '{ print $2 }') -p 3000:3000 your-app-name`
