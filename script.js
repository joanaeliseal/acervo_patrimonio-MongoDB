//  Usando o banco de dados
use acervo_patrimonio

//  Criação das coleções
db.createCollection("bem_cultural")
db.createCollection("regiao")
db.createCollection("responsavel")

//  Criação de índices
db.bem_cultural.createIndex({ "nome": 1 })  // Índice para busca por nome
db.bem_cultural.createIndex({ "estado_conservacao": 1 }) // Índice para busca por estado de conservação

// Inserção de documentos na coleção `regiao`
db.regiao.insertMany([
    {
        "_id": "r1",
        "nome": "Litoral",
        "uf": ["PB"]
    },
    {
        "_id": "r2",
        "nome": "Agreste",
        "uf": ["PB","AL"]
    },
    {
        "_id": "r3",
        "nome": "Sertao",
        "uf": ["PB","CE"]
    },
    {
        "_id": "r4",
        "nome": "Chapada Diamantina",
        "uf": ["BA"]
    },
    {
        "_id": "r5",
        "nome": "Zona da Mata",
        "uf": ["PE"]
    }
    ]);

// Inserção de documentos na coleção `responsavel`
db.responsavel.insertMany([
    {
        "_id": "resp1",
        "nome": "IPHAN",
        "contatos": ["+55 83 99999-9999","contato@iphan.gov.br"],
        "cnpj": "12.345.678/0001-99",
        "razao_social": "Instituto do Patrimônio Histórico e Artístico Nacional"
    },
    {
        "_id": "resp2",
        "nome": "Governo da Paraíba",
        "contatos": ["+55 83 3222-2222","governo@pb.gov.br"],
        "cnpj": "98.765.432/0001-11",
        "razao_social": "Secretaria de Cultura da Paraíba"
    },
    {
        "_id": "resp3",
        "nome": "Fundação do Patrimônio Histórico e Artístico de Pernambuco",
        "contatos": ["+55 81 3184-3000","fundarpe@fundarpe.pe.gov.br"],
        "cnpj": "10.658.128/0001-90",
        "razao_social": "Fundação do Patrimônio Histórico e Artístico de Pernambuco"
    },
    {
        "_id": "resp4",
        "nome": "Instituto do Patrimônio Histórico e Artístico Nacional - BA",
        "contatos": ["+55 71 3417-1800","iphan.ba@iphan.gov.br"],
        "cnpj": "26.474.063/0001-00",
        "razao_social": "Instituto do Patrimônio Histórico e Artístico Nacional - Bahia"
    },
    {
        "_id": "resp5",
        "nome": "Instituto do Patrimônio Histórico e Artístico Nacional - CE",
        "contatos": ["+55 85 3101-2793","iphan.ce@iphan.gov.br"],
        "cnpj": "26.474.063/0003-00",
        "razao_social": "Instituto do Patrimônio Histórico e Artístico Nacional - Ceará"
    }
    ]);

// Inserção de documentos na coleção `bem_cultural`
// bem_cultural + regiao + responsavel
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
        ],
        "regiao_id": "r1",
        "responsavel_id": "resp1"
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
        ],
        "regiao_id": "r1",
        "responsavel_id": "resp2"
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
        ],
        "regiao_id": "r1",
        "responsavel_id": "resp1"
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
        ],
        "regiao_id": "r2",
        "responsavel_id": "resp1"
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
        ],
        "regiao_id": "r1",
        "responsavel_id": "resp2"
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
        ],
        "regiao_id": "r4",
        "responsavel_id": "resp4"
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
        ],
        "regiao_id": "r4",
        "responsavel_id": "resp4"
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
        ],
        "regiao_id": "r3",
        "responsavel_id": "resp5"
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
        ],
        "regiao_id": "r5",
        "responsavel_id": "resp3"
    }
    ]);

//  Operações de Consulta (CRUD)

// Consulta 1: Buscar bens com estado de conservação "Preservado" ou "Restaurado"
// Justificativa: uso de $in para filtrar múltiplos valores em um campo simples
db.bem_cultural.find({ estado_conservacao: { $in: ["Preservado", "Restaurado"] } });

// Consulta 2: Buscar bens cuja data de origem é posterior ao ano 1800
// Justificativa: uso de $gt (maior que) para comparação com string representando o ano
db.bem_cultural.find({ data_origem: { $gt: "1800" } });

// Consulta 3: Buscar bens do tipo "Religioso" com projeção parcial
// Justificativa: uso de projeção para limitar os campos retornados e filtro por subdocumento
db.bem_cultural.find(
    { "material.tipo": "Religioso" },
    { nome: 1, descricao: 1, _id: 0 }
);

// Consulta 4: Buscar bens anteriores a 1700 com nome e estado de conservação
// Justificativa: uso de $lt (menor que) e projeção seletiva
db.bem_cultural.find(
    { data_origem: { $lt: "1700" } },
    { nome: 1, estado_conservacao: 1, _id: 0 }
);

// Consulta 5: Listar todos os bens com projeção de nome e proteção legal
// Justificativa: uso de projeção sem filtro
db.bem_cultural.find({}, { nome: 1, protecao_legal: 1, _id: 0 });

// Consulta 6: Buscar bens com proteção municipal
// Justificativa: filtro simples por campo string (possui apenas um valor)
db.bem_cultural.find({ protecao_legal: "Municipal" });

// Consulta 7: Buscar bens que estão localizados em um logradouro específico
// Justificativa: filtro por campo embutido dentro de array de objetos
db.bem_cultural.find({ "material.endereco.logradouro": "Praça Pedro Américo" });

// Consulta 8: Ordenar os bens por data de origem e limitar a 3 resultados
// Justificativa: uso de sort e limit combinados com projeção para listagem controlada
db.bem_cultural.find({}, { nome: 1, data_origem: 1, _id: 0 })
    .sort({ data_origem: 1 })
    .limit(3);

// Consulta 9: Junção com coleção regiao usando $lookup
// Justificativa: necessário devido à modelagem com referência (regiao_id), para acessar dados da região
db.bem_cultural.aggregate([
    {
        $lookup: {
            from: "regiao",
            localField: "regiao_id",
            foreignField: "_id",
            as: "detalhes_regiao"
        }
    }
]);

// Consulta 10: Junção com coleção responsavel usando $lookup
// Justificativa: necessário para recuperar dados do responsável pelo bem cultural
db.bem_cultural.aggregate([
    {
        $lookup: {
            from: "responsavel",
            localField: "responsavel_id",
            foreignField: "_id",
            as: "detalhes_responsavel"
        }
    }
]);

// Consulta 11: Agrupamento por estado de conservação
// Justificativa: sumariza dados com uso de $group e $sum para contagem por categoria
db.bem_cultural.aggregate([
    {
        $group: {
            _id: "$estado_conservacao",
            total: { $sum: 1 }
        }
    }
]);
