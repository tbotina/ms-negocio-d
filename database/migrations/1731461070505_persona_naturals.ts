import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'persona_naturals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nombre')
      table.string('cedula')
      table.date('fecha_nacimiento')
      table.string('security_id')

      table.integer('cliente_id').unsigned().references('clientes.id')
      table.integer('empresa_id').unsigned().references('empresas.id')


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
