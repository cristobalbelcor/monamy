// Catálogo de roles: temas, color de acento y chips de sugerencia por tema.
// Cada tema declara { emoji, title, desc, key }; la key enlaza con suggestions
// y, para el rol "nino", con los subtemas de data/subtemas-nino.js

export const ROLES = {
    nino: {
        label: 'Niño/Niña',
        color: '#48BB78',
        topicsTitle: '¿Qué quieres hablar hoy?',
        topicsSub: 'Escoge el tema y Monamy te explica y te acompaña con mucho cariño 💚',
        topics: [
            { emoji: '😢', title: 'Me siento triste',           desc: 'Tristeza, ganas de llorar',          key: 'tristeza-nino'   },
            { emoji: '😰', title: 'Tengo miedo',                desc: 'Miedos, pesadillas, susto',           key: 'miedo-nino'      },
            { emoji: '😡', title: 'Me enojo mucho',             desc: 'Rabia, frustración, berrinche',       key: 'enojo-nino'      },
            { emoji: '👨‍👩‍👧', title: 'Mi familia',             desc: 'Cambios en casa, hermanos, papás',   key: 'familia-nino'    },
            { emoji: '🌟', title: 'Soy especial',               desc: 'Autoestima, talentos, quién soy',     key: 'autoestima-nino' },
            { emoji: '🏫', title: 'Mi colegio',                 desc: 'Amigos, clases, profesores',          key: 'colegio-nino'    },
            { emoji: '🌈', title: 'Mi cuerpo',                  desc: 'Cambios, pubertad, cómo funciono',    key: 'cuerpo-nino'     },
            { emoji: '🕊️', title: 'Alguien se fue',            desc: 'Duelo, despedidas, extrañar',         key: 'duelo-nino'      },
            { emoji: '🧘', title: 'Quiero calmarme',            desc: 'Técnicas para sentirme mejor',        key: 'calma-nino'      },
            { emoji: '🤝', title: 'Mis derechos',               desc: 'Lo que merezco y nadie puede quitarme', key: 'derechos-nino' },
            { emoji: '📱', title: 'El celular y los juegos',    desc: 'Redes, videojuegos, pantallas',       key: 'digital-nino'    },
            { emoji: '💫', title: 'Mis sueños y metas',         desc: 'Qué quiero ser, mis talentos',        key: 'suenos-nino'     },
        ],
        suggestions: {
            'tristeza-nino':   ['¿Por qué me siento así?', '¿Qué hago cuando lloro mucho?', '¿A quién le cuento?'],
            'miedo-nino':      ['Tengo miedo a la oscuridad', 'Me da miedo estar solo/a', '¿Cómo me calmo?'],
            'enojo-nino':      ['Me pongo muy bravo/a', '¿Cómo controlo mi rabia?', 'Peleé con un amigo'],
            'familia-nino':    ['Mis papás se separaron', 'Llegó un hermanito', 'Me siento solo en casa'],
            'autoestima-nino': ['A veces no me gusto', 'Me dicen cosas feas', '¿Por qué soy diferente?'],
            'colegio-nino':    ['No tengo amigos', 'Un niño me molesta', 'Me va mal en clases'],
            'cuerpo-nino':     ['¿Por qué cambia mi cuerpo?', 'Me da vergüenza', 'Quiero entender la pubertad'],
            'duelo-nino':      ['Se murió mi mascota', 'Falleció alguien de mi familia', '¿Por qué me duele tanto?'],
            'calma-nino':      ['Necesito respirar y tranquilizarme', 'Me siento muy nervioso/a', 'Quiero relajarme'],
            'derechos-nino':   ['¿Qué derechos tengo?', 'Alguien no me respeta', '¿Quién me protege?'],
            'digital-nino':    ['Me la paso mucho en el celular', 'Vi algo que me asustó en internet', 'Alguien me escribió cosas raras'],
            'suenos-nino':     ['No sé en qué soy bueno/a', 'Quiero descubrir mis talentos', '¿Cómo logro mis sueños?'],
        }
    },

    adolescente: {
        label: 'Adolescente',
        color: '#9F7AEA',
        topicsTitle: '¿Qué está pasando?',
        topicsSub: 'Aquí no hay juicios. Elige el tema y hablemos con honestidad.',
        topics: [
            { emoji: '🧠', title: 'Salud mental',     desc: 'Ansiedad, depresión, estrés',        key: 'salud-mental'   },
            { emoji: '💑', title: 'Relaciones y amor', desc: 'Primeras relaciones, límites',        key: 'relaciones'     },
            { emoji: '🏳️‍🌈', title: 'Mi identidad', desc: 'Orientación, género, quién soy',      key: 'identidad'      },
            { emoji: '📱', title: 'Redes y tecnología', desc: 'Ciberbullying, adicción digital',   key: 'redes'          },
            { emoji: '🍺', title: 'Sustancias',        desc: 'Alcohol, drogas, presión de pares',  key: 'sustancias'     },
            { emoji: '🏠', title: 'Familia difícil',   desc: 'Conflictos, separación, comunicación', key: 'familia-teen' },
            { emoji: '🎓', title: 'Futuro y presión',  desc: 'Carrera, metas, miedo a fallar',     key: 'futuro'         },
            { emoji: '💚', title: 'Mi proyecto de vida', desc: 'Habilidades, metas, bienestar',    key: 'proyecto-vida'  },
        ],
        suggestions: {
            'salud-mental':  ['Me siento muy ansioso/a', 'No tengo ganas de nada', 'Lloro sin razón'],
            'relaciones':    ['Alguien me gusta', 'Mi relación no es sana', '¿Cómo pongo límites?'],
            'identidad':     ['No sé quién soy', 'Creo que soy LGBTQ+', 'No me identifico con mi género'],
            'redes':         ['Me hacen bullying en línea', 'No puedo dejar el celular', 'Alguien me contactó raro'],
            'sustancias':    ['Mis amigos me presionan', 'Quiero entender los riesgos', 'Creo que consumo demasiado'],
            'familia-teen':  ['Hay peleas constantes en casa', 'Mis papás se separaron', 'No me entienden'],
            'futuro':        ['No sé qué estudiar', 'Tengo miedo de fracasar', 'Me siento perdido/a'],
            'proyecto-vida': ['¿Cómo me conozco mejor?', 'Quiero mejorar mis hábitos', '¿Cuáles son mis fortalezas?'],
        }
    },

    adulto: {
        label: 'Padre/Madre/Acudiente',
        color: '#4299E1',
        topicsTitle: '¿Con qué necesitas ayuda hoy?',
        topicsSub: 'Te orientamos para acompañar al menor con cuidado y responsabilidad.',
        topics: [
            { emoji: '🌱', title: 'Pubertad y cambios',    desc: 'Cómo hablar de cambios corporales',    key: 'pubertad-adulto'    },
            { emoji: '😢', title: 'Mi hijo/a está triste', desc: 'Depresión, ansiedad, aislamiento',      key: 'hijo-triste'        },
            { emoji: '💬', title: 'Comunicarme mejor',     desc: 'Diálogo, escucha activa, confianza',    key: 'comunicacion'       },
            { emoji: '🏠', title: 'Cambios en la familia', desc: 'Separación, mudanza, pérdidas',         key: 'cambios-familia'    },
            { emoji: '⚠️', title: 'Señales de alerta',    desc: 'Detectar situaciones de riesgo',        key: 'senales-alerta'     },
            { emoji: '🌸', title: 'Educación sexual',      desc: 'Hablar de sexualidad con confianza',    key: 'edusexual-adulto'   },
        ],
        suggestions: {
            'pubertad-adulto':  ['¿Cómo empiezo esta conversación?', '¿Qué palabras uso?', 'Mi hijo/a tiene vergüenza'],
            'hijo-triste':      ['¿Cómo sé si es depresión?', 'No habla conmigo', '¿Cuándo buscar ayuda profesional?'],
            'comunicacion':     ['Mi hijo/a no me escucha', 'Siempre terminamos peleando', '¿Cómo gano su confianza?'],
            'cambios-familia':  ['Nos separamos y no sé cómo decírselo', 'Murió un familiar', 'Nos mudamos pronto'],
            'senales-alerta':   ['Cambió mucho su comportamiento', 'Se aísla de todos', 'Creo que algo le pasó'],
            'edusexual-adulto': ['¿A qué edad hablo de esto?', 'Me da pena el tema', '¿Qué le digo exactamente?'],
        }
    },

    docente: {
        label: 'Docente/Orientador',
        color: '#ED8936',
        topicsTitle: '¿Qué situación necesitas abordar?',
        topicsSub: 'Orientación profesional para situaciones sensibles en el entorno escolar.',
        topics: [
            { emoji: '🏫', title: 'Situación en el aula',     desc: 'Crisis o conflictos difíciles',       key: 'situacion-aula'     },
            { emoji: '👁️', title: 'Señales de alerta',       desc: 'Estudiantes en posible riesgo',        key: 'senales-estudiante' },
            { emoji: '💬', title: 'Hablar con el estudiante', desc: 'Cómo iniciar la conversación',         key: 'hablar-estudiante'  },
            { emoji: '📋', title: 'Rutas de atención',        desc: 'Protocolos y activación de rutas',     key: 'protocolo'          },
            { emoji: '👨‍👩‍👧', title: 'Llamar a la familia', desc: 'Cómo comunicar la situación',          key: 'familia-docente'    },
            { emoji: '🧘', title: 'Mi bienestar docente',     desc: 'Autocuidado y límites emocionales',    key: 'bienestar-docente'  },
        ],
        suggestions: {
            'situacion-aula':     ['Un estudiante tuvo una crisis', 'Hay un conflicto entre alumnos', 'Encontré algo preocupante'],
            'senales-estudiante': ['¿Qué señales debo vigilar?', 'Un alumno cambió mucho', 'Sospecho de abuso en casa'],
            'hablar-estudiante':  ['¿Cómo abordo el tema?', '¿Dónde y cuándo hablo con él/ella?', '¿Qué NO debo decir?'],
            'protocolo':          ['¿Cuándo activo la ruta de atención?', '¿A quién debo reportar?', 'Necesito el paso a paso'],
            'familia-docente':    ['La familia no cree lo que pasa', 'Los padres reaccionaron mal', '¿Cómo hago la llamada?'],
            'bienestar-docente':  ['Me afecta emocionalmente', '¿Cómo pongo límites?', 'Tengo demasiados casos difíciles'],
        }
    }
};
