package com.augustobellinaso.evaccinefsw.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;

    private String nome;

    private String cpf;

    private String telefone;

    private String email;

    private Integer idade;

    private String dataNascimento;

    private Boolean isVacinada;

    @ManyToOne
    @JoinColumn(name = "codigo_grupo_prioritario")
    private GruposPrioritarios grupo;



}
