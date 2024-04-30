import { TextField, Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import {UsuariosContext} from '../context/UsuariosContext'

import { useContext } from 'react'
function CadastroTrilhas() {
    const {usuarios, setUsuarios, loading} =  useContext(UsuariosContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function adicionarUsuarios(novoUsuario){
    setUsuarios([...usuarios, novoUsuario])
  }

  const onSubmit = (data) => adicionarUsuarios(data);
  return (
    <div>
      <h1>Cadastro de nova trilha</h1>
      <form>
        <Box>
          <TextField
            type="text"
            label="Nome Trilha"
            variant="outlined"
            fullWidth
            placeholder="Digite o nome da trilha"
            error={errors.nomeTrilha ? true : false}
            {...register("nomeTrilha", { maxLength: 100, required: true })}
          />
        </Box>
        <Box>
          <TextField
            type="number"
            label="Duração (min)"
            margin="normal"
            placeholder="digite a duração em minutos"
            error={errors.duracao ? true : false}
            {...register("duracao", { maxLength: 4, required: true })}
          />
          <TextField
            label="Distância (km)"
            type="number"
            margin="normal"
            placeholder="digite a distância em km"
            error={errors.trajeto ? true : false}
            {...register("trajeto", { maxLength: 5, required: true })}
          />
        </Box>

        <Box>
          <TextField
            label="Cidade"
            type="text"
            margin="normal"
            placeholder="digite o nome da cidade"
            error={errors.cidade ? true : false}
            {...register("cidade", { maxLength: 60, required: true })}
          />
          <TextField
            label="Estado"
            margin="normal"
            type="text"
            error={errors.estado ? true : false}
            {...register("estado", { maxLength: 2, required: true })}
          ></TextField>
        </Box>

        <Box>
          <TextField
            type="text"
            label="Nome"
            margin="normal"
            placeholder="seu nome completo"
            error={errors.nomeUsuario ? true : false}
            {...register("nomeUsuario", { maxLength: 60 })}
          />
          <TextField
            label="Dificuldade"
            margin="normal"
            type="text"
            {...register("dificuldade")}
          />
        </Box>

        <Box>
          <TextField
            label="Tipo"
            margin="normal"
            type="text"
            {...register("tipo")}
          />
          <TextField
            type="text"
            label="URL Imagem"
            margin="normal"
            placeholder="insira um link de uma imagem da trilha"
            error={errors.urlImagem ? true : false}
            {...register("urlImagem", { maxLength: 300 })}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default CadastroTrilhas;
