defmodule PickABook.Comments do
  use Ecto.Schema
  import Ecto.Changeset


  schema "comments" do
    field :author_comment, :string
    field :body_comment, :string

    timestamps()
  end

  @doc false
  def changeset(comments, attrs) do
    comments
    |> cast(attrs, [:author_comment, :body_comment])
    |> validate_required([:author_comment, :body_comment])
  end
end
