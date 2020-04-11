[2K[1GProgram {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'project-js/estimate_pi.js'
  hasHoistedVars: false
  mtime: 1_585_238_123_391.6365
  sourceType: 'script'
  syntax: Array [
    'jsx'
    'flow'
  ]
  body: Array [
    VariableDeclarationStatement {
      declaration: VariableDeclaration {
        kind: 'const'
        declarations: Array [
          VariableDeclarator {
            id: BindingIdentifier {name: 'estimate_pi'}
            init: ArrowFunctionExpression {
              head: FunctionHead {
                async: false
                hasHoistedVars: false
                params: Array [BindingIdentifier {name: 'n'}]
              }
              body: BlockStatement {
                directives: Array []
                body: Array [
                  VariableDeclarationStatement {
                    declaration: VariableDeclaration {
                      kind: 'const'
                      declarations: Array [
                        VariableDeclarator {
                          id: BindingIdentifier {name: 'nums'}
                          init: ObjectExpression {
                            properties: Array [
                              ObjectProperty {
                                key: StaticPropertyKey {value: Identifier {name: 'circle'}}
                                value: NumericLiteral {value: 0}
                              }
                              ObjectProperty {
                                key: StaticPropertyKey {value: Identifier {name: 'total'}}
                                value: NumericLiteral {value: 0}
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                  ForStatement {
                    test: BinaryExpression {
                      operator: '>'
                      left: ReferenceIdentifier {name: 'n'}
                      right: NumericLiteral {value: 0}
                    }
                    update: UpdateExpression {
                      operator: '--'
                      prefix: false
                      argument: ReferenceIdentifier {name: 'n'}
                    }
                    body: BlockStatement {
                      directives: Array []
                      body: Array [
                        VariableDeclarationStatement {
                          declaration: VariableDeclaration {
                            kind: 'const'
                            declarations: Array [
                              VariableDeclarator {
                                id: BindingArrayPattern {
                                  elements: Array [
                                    BindingIdentifier {
                                      name: 'x'
                                      meta: PatternMeta {}
                                    }
                                    BindingIdentifier {
                                      name: 'y'
                                      meta: PatternMeta {}
                                    }
                                  ]
                                }
                                init: ArrayExpression {
                                  elements: Array [
                                    CallExpression {
                                      arguments: Array []
                                      callee: MemberExpression {
                                        object: ReferenceIdentifier {name: 'Math'}
                                        property: StaticMemberProperty {value: Identifier {name: 'random'}}
                                      }
                                    }
                                    CallExpression {
                                      arguments: Array []
                                      callee: MemberExpression {
                                        object: ReferenceIdentifier {name: 'Math'}
                                        property: StaticMemberProperty {value: Identifier {name: 'random'}}
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                        VariableDeclarationStatement {
                          declaration: VariableDeclaration {
                            kind: 'const'
                            declarations: Array [
                              VariableDeclarator {
                                id: BindingIdentifier {name: 'distance'}
                                init: BinaryExpression {
                                  operator: '+'
                                  left: BinaryExpression {
                                    operator: '**'
                                    left: ReferenceIdentifier {name: 'x'}
                                    right: NumericLiteral {value: 2}
                                  }
                                  right: BinaryExpression {
                                    operator: '**'
                                    left: ReferenceIdentifier {name: 'y'}
                                    right: NumericLiteral {value: 2}
                                  }
                                }
                              }
                            ]
                          }
                        }
                        ExpressionStatement {
                          expression: LogicalExpression {
                            operator: '&&'
                            left: BinaryExpression {
                              operator: '<='
                              left: ReferenceIdentifier {name: 'distance'}
                              right: NumericLiteral {value: 1}
                            }
                            right: UpdateExpression {
                              operator: '++'
                              prefix: false
                              argument: MemberExpression {
                                object: ReferenceIdentifier {name: 'nums'}
                                property: StaticMemberProperty {value: Identifier {name: 'circle'}}
                              }
                            }
                          }
                        }
                        ExpressionStatement {
                          expression: UpdateExpression {
                            operator: '++'
                            prefix: false
                            argument: MemberExpression {
                              object: ReferenceIdentifier {name: 'nums'}
                              property: StaticMemberProperty {value: Identifier {name: 'total'}}
                            }
                          }
                        }
                      ]
                    }
                  }
                  ReturnStatement {
                    argument: BinaryExpression {
                      operator: '/'
                      right: MemberExpression {
                        object: ReferenceIdentifier {name: 'nums'}
                        property: StaticMemberProperty {value: Identifier {name: 'total'}}
                      }
                      left: BinaryExpression {
                        operator: '*'
                        left: NumericLiteral {value: 4}
                        right: MemberExpression {
                          object: ReferenceIdentifier {name: 'nums'}
                          property: StaticMemberProperty {value: Identifier {name: 'circle'}}
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
    ExpressionStatement {
      expression: CallExpression {
        callee: MemberExpression {
          object: ReferenceIdentifier {name: 'console'}
          property: StaticMemberProperty {value: Identifier {name: 'log'}}
        }
        arguments: Array [
          CallExpression {
            arguments: Array [NumericLiteral {value: 100_000_000}]
            callee: ReferenceIdentifier {name: 'estimate_pi'}
          }
        ]
      }
    }
  ]
}
