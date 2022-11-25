# S2 | Entrega: Teste Técnico - Backend

## Sobre o desafio

Você recebeu um arquivo CNAB com os dados das movimentações financeiras de várias lojas. Precisamos criar uma maneira para que estes dados sejam importados para um banco de dados.

Sua tarefa é criar uma interface web que aceite upload do arquivo CNAB, normalize os dados e armazene-os em um banco de dados relacional e exiba essas informações em tela.

## Instruções:

<br/>

1. Crie seu ambiente virtual:

```bash
python -m venv venv
```

2. Ative seu venv:

```bash
# linux:
source venv/bin/activate

# windows:
.\venv\Scripts\activate
```

3. Atualize o pip

```
 pip install --upgrade pip
```

4. Instale as dependências

```
pip install -r requirements.txt
```

5. Execute as migrações

```
python manage.py migrate
```

6. Inicie a aplicação

```
python manage.py runserver
```

Abra [http://127.0.0.1:8000/](http://127.0.0.1:8000/) para visualizá-lo no navegador.

Para parar a execução precione `Ctrl + c`
