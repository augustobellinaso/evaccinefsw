package com.augustobellinaso.evaccinefsw.controllers;

import com.augustobellinaso.evaccinefsw.domain.GruposPrioritarios;
import com.augustobellinaso.evaccinefsw.repository.GruposPrioritariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public class GruposPrioritariosController {

    @Autowired
    private GruposPrioritariosRepository gruposPrioritariosRepository;

    @GetMapping
    public List<GruposPrioritarios> listarTodosGrupos(){
        return gruposPrioritariosRepository.findAll();
    }

    @GetMapping("/{codigo}")
    public GruposPrioritarios buscarGrupoPeloCodigo(@PathVariable Long codigo){
        return gruposPrioritariosRepository.findById(codigo).orElse(null);
    }


}
