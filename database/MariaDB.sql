SELECT * from usuario;
SELECT * FROM avaliacao;

#buscar o nome do usuario que comentou "Odiei" sobre uma Clínica

SELECT nome from usuario
JOIN avaliacao on avaliacao.user_id = usuario.user_id
WHERE avaliacao.comentario = "Odiei"

SELECT * from clinica;
# buscar o nome da clínica que teve a nota mais alta dada por um usuario 

SELECT nome FROM clinica
JOIN avaliacao on avaliacao.clinica_id = clinica.clinica_id
WHERE avaliacao.nota = (
  	SELECT MAX(avaliacao.nota) FROM avaliacao
  )