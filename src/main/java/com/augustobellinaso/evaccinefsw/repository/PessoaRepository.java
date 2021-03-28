package com.augustobellinaso.evaccinefsw.repository;

import com.augustobellinaso.evaccinefsw.domain.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Entity;

@Entity
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
