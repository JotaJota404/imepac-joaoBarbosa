# imepac-joaoBarbosa
# React Native App • Expo + TypeScript

Projeto prático desenvolvido durante a disciplina de React Native com o
Prof. Crispim Luiz Martins (ADS – IMEPAC).

O objetivo foi consolidar fundamentos essenciais de aplicações mobile:
estrutura de projeto, navegação, funções, hooks e componentização.

## 🚀 Tecnologias
- React Native
- Expo
- TypeScript
- React Navigation (Stack)
- @expo/vector-icons

## ✅ Funcionalidades Implementadas
- Estrutura organizada em `src/` (pages, components, global, assets, @types)
- Tema global (`themes.tsx`)
- Tela de Login com função de validação e navegação
- Tela de Cadastro com função de validação e feedback (Alert)
- Tela Home
- Navegação Stack (Login → Cadastro → Home)
- Funções acionadas por eventos (`onPress`, `onChangeText`)
- Uso de Hooks (`useState`)
- Componentes reutilizáveis (Input, Menu)

## 📁 Estrutura Base
src/
- pages/
  - login/
  - cadastro/
  - home/
  - AppNavigation.tsx
- components/
  - input/
  - menu/
- global/
  - themes.tsx
- assets/
- @types/

## ▶️ Como Executar
1. Instale as dependências:
   `npm install`
2. Inicie o projeto:
   `npx expo start`

## 🗺️ Próximos Passos
- Implementar novas telas conforme desafio da disciplina
- Adicionar lista e consumo de API
- Evoluir lógica de autenticação
