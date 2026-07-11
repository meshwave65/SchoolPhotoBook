Acho que sim. E eu faria uma coisa que aprendi com o CONTRACT do Canguess: **não reescreveria o 0.1**. O 0.2 deve parecer que foi escrito algumas semanas depois, por alguém olhando para trás e registrando o que realmente aconteceu.

Eu escreveria algo assim:

---

# 📘 BOOKFNM1975 - SYSTEM CONTRACT

## Versão 0.2 — Reconstrução da Arquitetura e Consolidação do MVP

---

# 0. PREFÁCIO — POR QUE ESTE DOCUMENTO EXISTE

O BookFNM1975 nasceu como um projeto de preservação da memória da Turma de Medicina de 1975 da Faculdade Nacional de Medicina da Universidade Federal do Rio de Janeiro.

Entretanto, este documento não tem como finalidade apenas descrever o sistema.

Seu principal objetivo é registrar a evolução do projeto, as decisões tomadas durante o desenvolvimento, os caminhos abandonados e os motivos que conduziram a cada escolha arquitetural.

Assim como o álbum físico preserva a memória de uma turma, este CONTRACT preserva a memória do próprio projeto.

Nenhuma decisão importante deve desaparecer com o tempo.

---

# 1. PROPÓSITO

O objetivo permanece inalterado desde a versão inicial.

Digitalizar o álbum físico da Turma de Medicina de 1975, permitindo sua consulta em computadores, tablets e principalmente celulares, preservando sua identidade visual e seu valor histórico.

O projeto não pretende modernizar o álbum.

Pretende garantir sua preservação para as próximas gerações.

---

# 2. EVOLUÇÃO DO PROJETO

A primeira implementação buscou reproduzir o álbum utilizando uma arquitetura construída de forma incremental.

Ao longo da evolução, sucessivas alterações estruturais tornaram a aplicação progressivamente mais difícil de compreender e manter.

Embora diversas tentativas de estabilização tenham sido realizadas, concluiu-se que o custo de recuperação havia superado o custo de reconstrução.

A decisão de abandonar o código original não representou o abandono do projeto.

Ao contrário.

Representou a preservação de seus conceitos fundamentais através de uma nova implementação significativamente mais simples.

O projeto atual nasce dessa reconstrução.

Todo o conhecimento adquirido durante a primeira fase foi preservado.

Apenas a implementação foi substituída.

---

# 3. FILOSOFIA DE DESENVOLVIMENTO

## 3.1 Simplicidade deliberada

O BookFNM1975 é um MVP.

Sua arquitetura não procura antecipar necessidades futuras.

Cada funcionalidade implementada deve resolver um problema existente.

Possibilidades futuras são registradas, mas não implementadas.

---

## 3.2 Abstração não implica implementação

Durante o desenvolvimento surgem naturalmente ideias capazes de transformar o projeto em uma plataforma muito mais ampla.

Essas ideias não devem ser descartadas.

Devem ser registradas.

A implementação somente ocorrerá quando houver necessidade real.

O backlog arquitetural passa a fazer parte da evolução do projeto.

---

## 3.3 MVP antes da plataforma

Sempre que houver conflito entre uma solução elegante e uma solução simples, prevalecerá aquela que melhor atender ao MVP.

Uma arquitetura definitiva construída antes da necessidade normalmente representa complexidade desnecessária.

---

## 3.4 Simplicidade não significa desconhecimento

Diversas simplificações presentes no sistema são decisões conscientes.

Elas não representam ausência de conhecimento técnico.

Representam priorização.

Quando necessário, essas simplificações serão substituídas por soluções mais robustas.

Até esse momento, permanecem exatamente como foram planejadas.

---

# 4. PRINCÍPIOS DO PRODUTO

O álbum físico continua sendo a principal referência.

A experiência digital deve transmitir ao usuário a sensação de estar folheando um livro.

Não se trata de uma rede social.

Não se trata de um sistema documental.

Trata-se de um livro digital.

Todas as decisões futuras deverão preservar essa identidade.

---

# 5. DECISÕES TOMADAS DURANTE A RECONSTRUÇÃO

Durante a reconstrução da arquitetura foram definidas as seguintes diretrizes.

* reinício completo da aplicação;
* preservação apenas dos conceitos e conteúdos;
* retorno da Capa como primeira experiência do usuário;
* Header fixo;
* BottomNav fixo;
* Content como única região com rolagem;
* adoção do Tailwind CSS como base visual;
* eliminação de dependências desnecessárias;
* preferência por componentes pequenos e facilmente substituíveis.

Essas decisões representam o novo ponto de partida do projeto.

---

# 6. DECISÕES CONSCIENTEMENTE ADIADAS

Durante a reconstrução foram identificadas diversas possibilidades de evolução.

Entretanto, decidiu-se conscientemente adiar sua implementação.

Entre elas:

* múltiplos álbuns;
* plataforma genérica de memória institucional;
* galerias de imagens;
* vídeos;
* comentários;
* edição colaborativa;
* backend de gerenciamento;
* autenticação;
* sincronização online.

Nenhuma dessas funcionalidades faz parte do escopo da versão atual.

Sua existência neste documento não representa compromisso de implementação.

Representa apenas o registro de uma possibilidade identificada.

---

# 7. ARQUITETURA DO MVP

A interface permanece organizada em três regiões independentes.

* Header
* Content
* BottomNav

Apenas o Content realiza rolagem.

Essa organização aproxima a experiência de um livro físico, preservando permanentemente os elementos de navegação.

---

# 8. CONTEÚDO

O frontend não interpreta conteúdo.

Apenas o apresenta.

Cada página deverá ser capaz de exibir apenas as informações efetivamente existentes.

A ausência de uma biografia, fotografia ou outro elemento nunca deverá gerar espaços vazios ou componentes incompletos.

Os componentes devem adaptar-se automaticamente ao conteúdo disponível.

---

# 9. PROBLEMAS CONHECIDOS DA VERSÃO 0.2

No momento da publicação desta versão permanecem conhecidos:

* identidade visual ainda em refinamento;
* navegação funcional, porém provisória;
* busca ainda limitada;
* estrutura definitiva dos dados ainda em discussão;
* ausência de backend de gerenciamento.

Esses itens são conhecidos e aceitos para a fase atual.

---

# 10. PRINCÍPIOS DE EVOLUÇÃO

Toda nova versão deverá observar as seguintes regras:

1. preservar a memória histórica do projeto;
2. registrar decisões antes de implementá-las;
3. distinguir claramente ideias de funcionalidades;
4. priorizar estabilidade antes de expansão;
5. evitar complexidade sem benefício imediato ao usuário.

---

# 11. CRITÉRIO DE SUCESSO DA VERSÃO 1.0

A versão 1.0 será considerada concluída quando qualquer integrante da Turma de Medicina de 1975, independentemente de sua familiaridade com tecnologia, conseguir:

* abrir o livro;
* navegar entre suas seções;
* localizar um colega;
* consultar seu conteúdo;
* retornar ao índice;

sem qualquer explicação prévia.

Quando isso ocorrer, o objetivo original do projeto terá sido alcançado.

---

Eu só faria **uma mudança em relação ao CONTRACT do Canguess**: manteria o BOOKFNM1975 mais curto e narrativo. O Canguess é uma plataforma em constante evolução, então faz sentido um CONTRACT extenso e muito técnico. O livro, por outro lado, é um projeto mais fechado. O CONTRACT deve refletir isso: ser uma narrativa da evolução do projeto, não uma especificação crescente de uma plataforma. Assim ele continua cumprindo seu papel de preservar a memória das decisões sem perder a leveza e o foco do próprio produto.

