// Usando o banco de dados
use acervo_patrimonio

// Criação das coleções
db.createCollection("bem_cultural")
db.createCollection("regiao")
db.createCollection("responsavel")

// Criação de índices
db.bem_cultural.createIndex({ "nome": 1 })  // Índice para busca por nome
db.bem_cultural.createIndex({ "estado_conservacao": 1 }) // Índice para buscar por estado de conservação

// Inserção de documentos na coleção bem_cultural
db.bem_cultural.insertMany([
    {
        "nome": "Forte de Santa Catarina do Cabedelo",
        "descricao": "Fortaleza construída para defesa contra invasões.",
        "data_origem": "1597",
        "estado_conservacao": "Bom",
        "protecao_legal": "Federal",
        "material": [
            {
                "tipo": "Militar",
                "endereco": {
                    "logradouro": "Avenida João Carlos de Souza",
                    "numero": null
                },
                "coord_geograficas": {
                    "latitude": -7.0035,
                    "longitude": -34.8284
                }
            }
        ]
    },
    {
        "nome": "Igreja de Nossa Senhora da Misericórdia",
        "descricao": "Uma das primeiras igrejas da Paraíba.",
        "data_origem": "1586",
        "estado_conservacao": "Restaurado",
        "protecao_legal": "Federal",
        "material": [
            {
                "tipo": "Religioso",
                "endereco": {
                    "logradouro": "Ladeira São Francisco",
                    "numero": null
                },
                "coord_geograficas": {
                    "latitude": -7.1195,
                    "longitude": -34.8828
                }
            }
        ]
    },
    {
        "nome": "Mosteiro de São Bento",
        "descricao": "Mosteiro fundado por monges beneditinos.",
        "data_origem": "1600",
        "estado_conservacao": "Bom",
        "protecao_legal": "Federal",
        "material": [
            {
                "tipo": "Religioso",
                "endereco": {
                    "logradouro": "Avenida General Osório",
                    "numero": 36
                },
                "coord_geograficas": {
                    "latitude": -7.115,
                    "longitude": -34.878
                }
            }
        ]
    },
    {
        "nome": "Inscrições Rupestres do Ingá",
        "descricao": "Sítio arqueológico com inscrições pré-históricas.",
        "data_origem": "Pré-História",
        "estado_conservacao": "Preservado",
        "protecao_legal": "Federal",
        "material": [
            {
                "tipo": "Arqueológico",
                "endereco": {
                    "logradouro": "Sítio Arqueológico da Pedra do Ingá",
                    "numero": null
                },
                "coord_geograficas": {
                    "latitude": -7.2811,
                    "longitude": -35.6056
                }
            }
        ]
    },
    {
        "nome": "Teatro Santa Roza",
        "descricao": "Obra de estilo neoclássico, possui linhas influenciadas pelo barroco italiano.",
        "data_origem": "1873",
        "estado_conservacao": "Preservado",
        "protecao_legal": "Federal",
        "material": [
            {
                "tipo": "Teatro",
                "endereco": {
                    "logradouro": "Praça Pedro Américo",
                    "numero": null
                },
                "coord_geograficas": {
                    "latitude": -7.117887,
                    "longitude": -34.888914
                }
            }
        ]
    },
    {
      "nome": "Igreja de São Francisco e Convento de Salvador",
      "descricao": "Conjunto arquitetônico barroco considerado uma das Sete Maravilhas de Origem Portuguesa no Mundo.",
      "data_origem": "1723",
      "estado_conservacao": "Preservado",
      "protecao_legal": "Federal",
      "material": [
          {
              "tipo": "Religioso",
              "endereco": {
                  "logradouro": "Largo do Cruzeiro de São Francisco",
                  "numero": null
              },
              "coord_geograficas": {
                  "latitude": -12.9714,
                  "longitude": -38.5079
              }
          }
      ]
    },
    {
      "nome": "Centro Histórico de Salvador",
      "descricao": "Área que abrange diversos monumentos históricos, incluindo igrejas, museus e edifícios coloniais.",
      "data_origem": "Século XVI",
      "estado_conservacao": "Restaurado",
      "protecao_legal": "Federal",
      "material": [
          {
              "tipo": "Histórico",
              "endereco": {
                  "logradouro": "Centro Histórico",
                  "numero": null
              },
              "coord_geograficas": {
                  "latitude": -12.9718,
                  "longitude": -38.5103
              }
          }
      ]
    },
    {
      "nome": "Canoa Quebrada",
      "descricao": "Praia famosa pelas falésias avermelhadas e pela cultura hippie nos anos 70.",
      "data_origem": null,
      "estado_conservacao": "Preservado",
      "protecao_legal": "Estadual",
      "material": [
          {
              "tipo": "Paisagem Natural",
              "endereco": {
                  "logradouro": "Praia de Canoa Quebrada",
                  "numero": null
              },
              "coord_geograficas": {
                  "latitude": -4.5263,
                  "longitude": -37.7081
              }
          }
      ]
    },
    {
      "nome": "Teatro José de Alencar",
      "descricao": "Teatro histórico de Fortaleza, inaugurado em 1910, com estrutura metálica e vitrais coloridos.",
      "data_origem": "1910",
      "estado_conservacao": "Bom",
      "protecao_legal": "Federal",
      "material": [
          {
              "tipo": "Teatro",
              "endereco": {
                  "logradouro": "Rua Liberato Barroso",
                  "numero": 525
              },
              "coord_geograficas": {
                  "latitude": -3.7273,
                  "longitude": -38.5263
              }
          }
      ]
    },
    {
      "nome": "Engenho São Félix",
      "descricao": "Antigo engenho de açúcar que preserva a história da produção açucareira no Nordeste.",
      "data_origem": "1850",
      "estado_conservacao": "Restaurado",
      "protecao_legal": "Municipal",
      "material": [
          {
              "tipo": "Histórico",
              "endereco": {
                  "logradouro": "Rodovia PE-60",
                  "numero": null
              },
              "coord_geograficas": {
                  "latitude": -8.5866,
                  "longitude": -35.1207
              }
          }
      ]
    }
  ])

// Inserção de documentos na coleção regiao
db.regiao.insertMany([
    {
        "nome": "Litoral",
        "uf": ["PB"]
    },
    {
        "nome": "Agreste",
        "uf": ["PB", "AL"]
    },
    {
        "nome": "Sertão",
        "uf": ["PB", "CE"]
    },
    {
        "nome": "Chapada Diamantina",
        "uf": ["BA"]
    },
    {
        "nome": "Zona da Mata",
        "uf": ["PE"]
    }
]);

// Inserção de documentos na coleção responsavel
db.responsavel.insertMany([
    {
        "nome": "IPHAN",
        "contatos": ["+55 83 99999-9999", "contato@iphan.gov.br"],
        "cnpj": "12.345.678/0001-99",
        "razao_social": "Instituto do Patrimônio Histórico e Artístico Nacional"
    },
    {
        "nome": "Governo da Paraíba",
        "contatos": ["+55 83 3222-2222", "governo@pb.gov.br"],
        "cnpj": "98.765.432/0001-11",
        "razao_social": "Secretaria de Cultura da Paraíba"
    },
    {
        "nome": "Fundação do Patrimônio Histórico e Artístico de Pernambuco",
        "contatos": ["+55 81 3184-3000", "fundarpe@fundarpe.pe.gov.br"],
        "cnpj": "10.658.128/0001-90",
        "razao_social": "Fundação do Patrimônio Histórico e Artístico de Pernambuco"
    },
    {
        "nome": "Instituto do Patrimônio Histórico e Artístico Nacional - BA",
        "contatos": ["+55 71 3417-1800", "iphan.ba@iphan.gov.br"],
        "cnpj": "26.474.063/0001-00",
        "razao_social": "Instituto do Patrimônio Histórico e Artístico Nacional - Bahia"
    },
    {
        "nome": "Instituto do Patrimônio Histórico e Artístico Nacional - PE",
        "contatos": ["+55 81 3224-2128", "iphan.pe@iphan.gov.br"],
        "cnpj": "26.474.063/0002-00",
        "razao_social": "Instituto do Patrimônio Histórico e Artístico Nacional - Pernambuco"
    }
]);


//**** 2 consultas com pelo menos filtros diversos (IN, GT, etc), sem projeção; ****//


