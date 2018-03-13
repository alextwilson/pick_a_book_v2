defmodule PickABook.Repo.Migrations.CreateBooks do
  use Ecto.Migration

  def change do
    create table(:books) do
      add :title, :string
      add :author, :string
      add :genre, :string
      add :description, :text
      add :imageurl, :string

      timestamps()
    end

  end
end
