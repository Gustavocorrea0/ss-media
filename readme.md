# 📱 SS-MEDIA

## 📌 Descrição do Projeto

Este projeto consiste em uma rede social simple desenvolvida com **React Native utilizando Expo**, integrado ao **Supabase** como backend. A aplicação foi construída com objetivo de seguir boas práticas de desenvolvimento, com foco em organização, escalabilidade e facil manutenção de código.

---

## 👨‍💻 Informações

* **Desenvolvedor:** Gustavo Alfredo
* **Universidade:** PUCPR - Curitiba
* **Pós-Graduação:** Desenvolvimento de Aplicativos Moveis
* **Curso:** Desenvolvimento Mobile Profissional
* **Data:** 03/26

---

## 🚀 Tecnologias

* React Native (Expo)
* Supabase (Backend as a Service)
* TypeScript
* Jest (Testes Unitários)

---

## 🏗️ Arquitetura e Padrões de Desenvolvimento

### 🧼 Clean Code

O projeto segue princípios de **Clean Code**, garantindo:

* Código legível e organizado
* Funções com responsabilidade única
* Nomes claros e descritivos
* Baixo acoplamento

---

### 🧱 Arquitetura MVVM (Model-View-ViewModel)

A aplicação foi estruturada utilizando o padrão **MVVM**, separando responsabilidades em:

* **Model:** Manipulação de dados e regras de negócio (Supabase)
* **View:** Interface do usuário
* **ViewModel:** Camada intermediária entre View e Model

---

### 💉 Injeção de Dependências

Foi utilizada **Injeção de Dependências** para:

* Facilitar testes
* Reduzir acoplamento entre módulos
* Melhorar a escalabilidade do projeto

---

### 🧪 Testes Unitários (Jest)

O projeto conta com testes unitários utilizando **Jest**, garantindo:

* Confiabilidade do código
* Facilidade de manutenção
* Validação de regras de negócio

---

### 🎯 Padrão de Projeto: Mediator

Foi implementado o padrão **Mediator** para:

* Centralizar a comunicação entre componentes
* Reduzir dependências diretas
* Melhorar a organização do fluxo de eventos

---

## 🎥 Vídeo Explicativo



📼 [Clique Aqui para Conferir o vídeo demonstrando o funcionamento e o Desenvolvimento do projeto](https://youtu.be/r6GHDWliB7k)

---

## ▶️ Como Executar o Projeto

### 📦 Pré-requisitos

* Node.js instalado
* Expo CLI instalado
* Conta no Supabase configurada

---

### 🔧 Passos para execução

1. Clone o repositório:

```bash
git clone https://github.com/Gustavocorrea0/ss-media.git
```

2. Acesse a pasta do projeto:

```bash
cd ss-media
```

3. Instale as dependências:

```bash
npm install
```

4. Configure as variáveis de ambiente:
   Crie um arquivo `.env` com suas credenciais do Supabase:

```
EXPO_PUBLIC_SUPABASE_URL=your_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_key
```

5. Execute o projeto:

```bash
npx expo start
```

---

### 🧪 Executar testes

```bash
npm test
```

---

## 📱 Uso do Projeto

Após iniciar o app:

* Utilize o Expo Go para rodar no celular ou emulador
* Navegue pelas funcionalidades disponíveis
* Interaja com os dados integrados ao Supabase
* Teste fluxos principais da aplicação

---

