defmodule PickABook.Repo.Migrations.CreateComments do
  use Ecto.Migration

  def change do
    create table(:comments) do
      add :author_comment, :string
      add :body_comment, :string

      timestamps()
    end

  end
end
