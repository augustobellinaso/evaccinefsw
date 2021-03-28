package com.augustobellinaso.evaccinefsw.controllers;

import com.augustobellinaso.evaccinefsw.domain.Pessoa;
import com.augustobellinaso.evaccinefsw.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    @GetMapping
    public List<Pessoa> listarTodos() {
        return pessoaRepository.findAll();
    }

    @PostMapping
    public Pessoa cadastrarPessoa(@RequestBody Pessoa pessoa){
        Pessoa pessoaCadastrada = pessoaRepository.save(pessoa);
        pessoaCadastrada.setIsVacinada(false);
        return pessoaRepository.save(pessoaCadastrada);
    }

    @PutMapping
    public Pessoa atualizarPessoa(@PathVariable("codigo") Long codigo, @RequestBody Pessoa pessoa) {
        return pessoaRepository.findById(codigo).map(
                record -> {
                    record.setNome(pessoa.getNome());
                    record.setCpf(pessoa.getCpf());
                    record.setEmail(pessoa.getEmail());
                    record.setTelefone(pessoa.getTelefone());
                    record.setIdade(pessoa.getIdade());
                    record.setDataNascimento(pessoa.getDataNascimento());
                    record.setIsVacinada(pessoa.getIsVacinada());
                    return pessoaRepository.save(record);
                }).orElse(null);
    }

    @GetMapping(path = "/{codigo}")
    public Pessoa buscarPeloCodigo(@PathVariable Long codigo){
        return pessoaRepository.findById(codigo).orElse(null);
    }

}
